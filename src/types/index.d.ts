/**
 * HH Goa 2026 PFP Frame Generator Type Definitions
 */

export interface FrameConfig {
  /** Zoom scale factor (0.5 to 2.5) */
  zoom: number;
  /** Horizontal pan offset in pixels */
  offsetX: number;
  /** Vertical pan offset in pixels */
  offsetY: number;
  /** Builder Name displayed on pass */
  builderName: string;
  /** Builder Stack / Role displayed on pass */
  builderStack: string;
  /** Team / Project Name displayed on pass */
  builderTeam: string;
  /** Pass Timestamp string */
  builderTime: string;
  /** Brightness adjustment (-50 to 50) */
  brightness?: number;
  /** Contrast adjustment (-50 to 50) */
  contrast?: number;
}

export interface FramePreset {
  id: string;
  name: string;
  desc: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface ImageLoaderResult {
  image: HTMLImageElement;
  width: number;
  height: number;
}
