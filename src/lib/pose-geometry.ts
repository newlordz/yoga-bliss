export interface LandmarkPoint {
  x: number;
  y: number;
  z?: number;
  visibility?: number;
}

export interface TreePoseAnalysis {
  isAligned: boolean;
  message: string;
  standingLegAngle: number;
  bentLegAngle: number;
  standingLeg: "left" | "right" | "unknown";
  confidence: number;
}

/**
 * Calculates 2D planar angle at joint B in degrees between points A, B, and C
 */
export function calculateAngle(
  a: LandmarkPoint,
  b: LandmarkPoint,
  c: LandmarkPoint
): number {
  const radians =
    Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
  let degrees = Math.abs((radians * 180.0) / Math.PI);

  if (degrees > 180.0) {
    degrees = 360.0 - degrees;
  }

  return Math.round(degrees * 10) / 10;
}

/**
 * Calculates 2D Euclidean distance between two landmark points
 */
export function calculateDistance(a: LandmarkPoint, b: LandmarkPoint): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

/**
 * MediaPipe Pose Landmark Indices:
 * 11: left_shoulder, 12: right_shoulder
 * 23: left_hip,      24: right_hip
 * 25: left_knee,     26: right_knee
 * 27: left_ankle,    28: right_ankle
 */
export function evaluateTreePoseGeometry(
  landmarks: Record<number, LandmarkPoint>
): TreePoseAnalysis {
  const leftHip = landmarks[23];
  const rightHip = landmarks[24];
  const leftKnee = landmarks[25];
  const rightKnee = landmarks[26];
  const leftAnkle = landmarks[27];
  const rightAnkle = landmarks[28];

  // Visibility guard
  const required = [leftHip, rightHip, leftKnee, rightKnee, leftAnkle, rightAnkle];
  const isVisible = required.every(
    (pt) => pt && (pt.visibility === undefined || pt.visibility > 0.5)
  );

  if (!isVisible) {
    return {
      isAligned: false,
      message: "Please step back so your full body is visible in the frame.",
      standingLegAngle: 0,
      bentLegAngle: 0,
      standingLeg: "unknown",
      confidence: 0,
    };
  }

  // Calculate knee angles
  const leftKneeAngle = calculateAngle(leftHip, leftKnee, leftAnkle);
  const rightKneeAngle = calculateAngle(rightHip, rightKnee, rightAnkle);

  // In Tree Pose, one leg is straight (angle > 155 deg) and the other is bent (angle < 125 deg)
  const isLeftStanding = leftKneeAngle > 155 && rightKneeAngle < 130;
  const isRightStanding = rightKneeAngle > 155 && leftKneeAngle < 130;

  if (isLeftStanding) {
    // Lifted right foot should be above left ankle
    const isFootLifted = rightAnkle.y < leftAnkle.y - 0.05;
    return {
      isAligned: isFootLifted,
      message: isFootLifted
        ? "Beautiful Tree Pose balance on left leg! Hold steady..."
        : "Rest your right foot higher on your calf or inner thigh.",
      standingLegAngle: leftKneeAngle,
      bentLegAngle: rightKneeAngle,
      standingLeg: "left",
      confidence: 0.9,
    };
  }

  if (isRightStanding) {
    const isFootLifted = leftAnkle.y < rightAnkle.y - 0.05;
    return {
      isAligned: isFootLifted,
      message: isFootLifted
        ? "Wonderful Tree Pose balance on right leg! Hold steady..."
        : "Rest your left foot higher on your calf or inner thigh.",
      standingLegAngle: rightKneeAngle,
      bentLegAngle: leftKneeAngle,
      standingLeg: "right",
      confidence: 0.9,
    };
  }

  return {
    isAligned: false,
    message: "Root one foot firmly down, and bend the other knee outward.",
    standingLegAngle: Math.min(leftKneeAngle, rightKneeAngle),
    bentLegAngle: Math.max(leftKneeAngle, rightKneeAngle),
    standingLeg: "unknown",
    confidence: 0.6,
  };
}
