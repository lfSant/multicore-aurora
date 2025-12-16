export interface StartRiskFlowCommand {
  providerAcronym: string;
  channel: number;
  deviceIp: string;
  time: string;
  country: string;
  latitude: number;
  longitude: number;
  login?: string;
  entity?: number;
  observation?: string;
  flowSsn: string;
}
