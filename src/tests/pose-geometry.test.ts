import { describe, it, expect } from "vitest";
import {
  calculateAngle,
  calculateDistance,
  evaluateTreePoseGeometry,
  LandmarkPoint,
} from "@/lib/pose-geometry";

describe("Pose Geometry Calculation & Tree Pose Recognition", () => {
  it("calculates 90-degree right angle correctly", () => {
    const a: LandmarkPoint = { x: 0, y: 1 };
    const b: LandmarkPoint = { x: 0, y: 0 };
    const c: LandmarkPoint = { x: 1, y: 0 };

    const angle = calculateAngle(a, b, c);
    expect(angle).toBe(90);
  });

  it("calculates straight line 180-degree angle correctly", () => {
    const a: LandmarkPoint = { x: 0, y: -1 };
    const b: LandmarkPoint = { x: 0, y: 0 };
    const c: LandmarkPoint = { x: 0, y: 1 };

    const angle = calculateAngle(a, b, c);
    expect(angle).toBe(180);
  });

  it("calculates Euclidean distance accurately", () => {
    const a: LandmarkPoint = { x: 0, y: 0 };
    const b: LandmarkPoint = { x: 3, y: 4 };

    const dist = calculateDistance(a, b);
    expect(dist).toBe(5);
  });

  it("recognizes valid synthetic left-leg Tree Pose landmarks", () => {
    const syntheticLandmarks: Record<number, LandmarkPoint> = {
      // Left leg (standing straight): hip, knee, ankle
      23: { x: 0.45, y: 0.5, visibility: 0.95 },
      25: { x: 0.45, y: 0.7, visibility: 0.95 },
      27: { x: 0.45, y: 0.9, visibility: 0.95 },

      // Right leg (bent knee, foot raised): hip, knee out, ankle at inner knee
      24: { x: 0.55, y: 0.5, visibility: 0.95 },
      26: { x: 0.7, y: 0.65, visibility: 0.95 },
      28: { x: 0.47, y: 0.7, visibility: 0.95 },
    };

    const analysis = evaluateTreePoseGeometry(syntheticLandmarks);
    expect(analysis.standingLeg).toBe("left");
    expect(analysis.isAligned).toBe(true);
    expect(analysis.standingLegAngle).toBeGreaterThan(155);
    expect(analysis.bentLegAngle).toBeLessThan(130);
  });

  it("flags incomplete landmarks and advises stepping back", () => {
    const lowConfidenceLandmarks: Record<number, LandmarkPoint> = {
      23: { x: 0.45, y: 0.5, visibility: 0.2 }, // Low visibility
      24: { x: 0.55, y: 0.5, visibility: 0.9 },
      25: { x: 0.45, y: 0.7, visibility: 0.9 },
      26: { x: 0.7, y: 0.65, visibility: 0.9 },
      27: { x: 0.45, y: 0.9, visibility: 0.9 },
      28: { x: 0.47, y: 0.7, visibility: 0.9 },
    };

    const analysis = evaluateTreePoseGeometry(lowConfidenceLandmarks);
    expect(analysis.isAligned).toBe(false);
    expect(analysis.message).toContain("Please step back");
  });
});
