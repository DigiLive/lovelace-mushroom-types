import { HomeAssistant } from "./ha";
export default function setupCustomlocalize(hass?: HomeAssistant): (key: string, argObject?: Record<string, any>) => string;
