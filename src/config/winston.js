import { createLogger, transports, format } from "winston";
import Environment from "./environment";

export const logger = createLogger({
  level: Environment.LOG_LEVEL,
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level} | ${message}`;
    })
  ),
  transports: [new transports.Console()],
});
