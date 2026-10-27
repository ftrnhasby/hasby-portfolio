export interface LocalizedString {
  id: string;
  en: string;
}

export interface ScriptLine {
  time: string;
  visual: LocalizedString;
  audio: LocalizedString;
  psychologyIntent: LocalizedString;
}

export interface ScriptAngle {
  id: string;
  name: LocalizedString;
  hookType: LocalizedString;
  duration: string;
  concept: LocalizedString;
  lines: ScriptLine[];
}

export interface StoryboardItem {
  id: string;
  scene: LocalizedString;
  timecode: string;
  visualDescription: LocalizedString;
  technicalNote?: LocalizedString;
  toolUsed: string;
  assetType: 'Remotion Component' | 'Brand Footage' | 'Motion Graphic' | 'SFX / Soundbed' | 'AI Voiceover';
}

export interface VideoVariation {
  id: string;
  label: LocalizedString;
  hookHeadline: LocalizedString;
  angleDescription: LocalizedString;
  videoSrc: string;
  aspectRatio: '9:16';
  duration: string;
  specs: {
    durationFrames: string;
    fps: string;
    resolution: string;
    voiceModel: string;
  };
  keyTakeaway: LocalizedString;
}

export interface CreativeBrief {
  clientObjective: LocalizedString;
  targetAudience: LocalizedString;
  coreProblem: LocalizedString;
  angleHookStrategy: LocalizedString;
  keyDifferentiators: LocalizedString[];
  deliverables: LocalizedString[];
}

export type AssetCategory =
  | 'AI-generated footage or audio'
  | 'Self-shot / original footage'
  | 'Publicly sourced / third-party footage'
  | 'Motion graphics and compositing'
  | 'Product images or external assets';

export type LicenseStatus =
  | 'Verified Commercial'
  | 'Public Content (Spec Ad Use)'
  | 'Needs Permission'
  | 'Self-Created / Original'
  | 'Not documented';

export interface AssetBreakdownItem {
  id: string;
  name: LocalizedString;
  category: AssetCategory;
  sourceOrTool?: string;
  myContribution: LocalizedString;
  licenseStatus: LicenseStatus;
  notes?: LocalizedString;
}

export interface CreativeStrategy {
  projectType: LocalizedString;
  objective: LocalizedString;
  targetAudience: LocalizedString;
  audienceInsight: LocalizedString;
  coreAngle: LocalizedString;
  hookStrategy: LocalizedString;
  valueProposition: LocalizedString;
  callToAction: LocalizedString;
  creativeRationale: LocalizedString;
}

export interface ProductionPhase {
  phase: string;
  title: LocalizedString;
  turnaroundTime: LocalizedString;
  tools: string[];
  summary: LocalizedString;
  keyDeliverable: LocalizedString;
}

export interface HonestEvaluation {
  topPerformers: LocalizedString[];
  underperformers: LocalizedString[];
  creativeAssessment: LocalizedString;
  creativeLearnings: LocalizedString[];
  nextIterationStrategy: LocalizedString;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: LocalizedString;
  year: string;
  tagline: LocalizedString;
  heroSummary: LocalizedString;
  featured: boolean;
  
  // Highlight technical / craft statistics (no fabricated metrics)
  primaryHighlight: {
    value: string;
    label: LocalizedString;
    subtext: LocalizedString;
  };
  secondaryHighlights: {
    value: string;
    label: LocalizedString;
  }[];

  // Deep dive sections
  creativeBrief: CreativeBrief;
  creativeStrategy: CreativeStrategy;
  assetBreakdown: AssetBreakdownItem[];
  scriptAngles: ScriptAngle[];
  storyboard: StoryboardItem[];
  videoVariations: VideoVariation[];
  productionWorkflow: ProductionPhase[];
  honestEvaluation: HonestEvaluation;
  
  toolsUsed: string[];
}
