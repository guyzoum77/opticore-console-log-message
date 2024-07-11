import colors from "ansi-colors";
import {dateTimeFormattedUtils} from "./utils/dateTimeFormatted.utils";

class LogMessageCore {

    /**
     *
     * @param title
     * @param actionTitle
     * @param contentMessage
     */
    static success(title: string, actionTitle: string, contentMessage: string): void {
        console.log(`${colors.green(` [ ${title} ] `)} | ${dateTimeFormattedUtils()} | ${colors.bgGreen(`${colors.white(` Success `)}`)} [ ${actionTitle} ] ${contentMessage} - [ Status ] ${colors.green(`${colors.white(` 200 `)}`)}`);
    }

    /**
     *
     * @param title
     * @param actionTitle
     * @param typeActionTitle
     * @param typeActionDescribe
     * @param messageTitle
     * @param messageContent
     * @param httpCodeValue
     */
    static errorSpecified(title: string, actionTitle: any, typeActionTitle: any, typeActionDescribe: any, messageTitle: string,
                          messageContent: any, httpCodeValue: number): void {
        console.log(`${colors.red(`✘`)} ${colors.bgRed(`[ ${colors.bold(`${colors.white(` ${title} `)}`)} ]`)} | ${dateTimeFormattedUtils()} | [ ${colors.red(`${colors.bold(` ${actionTitle} `)}`)} ] | [ ${colors.bold(` ${typeActionTitle} `)} ] ${colors.red(` ${typeActionDescribe} `)} - [ ${colors.bold(` ${messageTitle} `)} ] ${colors.red(` ${messageContent} `)} - [ ${colors.red(`${colors.bold(` HttpCode `)}`)} ] ${colors.red(`${colors.bold(` ${httpCodeValue} `)}`)} `);
    }

    /**
     *
     * @param title
     * @param errorName
     * @param errorMessage
     * @param errorCode
     */
    static error(title: string, errorName: string, errorMessage: string, errorCode: number): void {
        console.log(`[ ${colors.red(`${title}`)} ] ${dateTimeFormattedUtils()} | ${colors.bgRed(`${colors.white(` ERROR `)}`)} ${colors.red(`[ ${errorName} ]`)} ${colors.red(`${errorMessage}`)} - [ Status ] ${colors.bgRed(`${colors.white(`${errorCode}`)}`)}`);
    }

    /**
     *
     * @param title
     * @param action
     * @param contentAction
     */
    static info(title: string, action: string, contentAction: string): void {
        console.log(`${colors.cyan(` [ ${title} ] `)} | ${dateTimeFormattedUtils()} | ${colors.bgCyan(`${colors.white(` Success `)}`)} [ ${action} ] ${contentAction} - [ Status ] ${colors.bgCyan(`${colors.white(` 200 `)}`)}`);
    }
}