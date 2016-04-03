import {Service} from "../annotation/Service";
import {Fetcher, FetcherFromConfig, Type} from "../fetcher/Fetcher";

@Service()
export class CheckFetcherOption {

    check(fetcher: Fetcher, optionsFromConfig: FetcherFromConfig): Array<string> {
        const errors: Array<string> = [];
        const fetcherMetaInfo = fetcher.getMetaInfo();
        const fetcherOptions = fetcherMetaInfo.options;
        Object.keys(fetcherOptions).forEach((key: string) => {
            if(optionsFromConfig.options[key] === undefined) {
                errors.push(`You need to add ${key} for ${fetcherMetaInfo.name} in isodash.conf.json!`);
            }
            switch (fetcherOptions[key]) {
                case Type.String: {
                    const error = CheckFetcherOption.checkType(optionsFromConfig, 'string', key, fetcherMetaInfo.name);
                    if(error) {
                        errors.push(error);
                    }
                    break;
                }
                case Type.Number: {
                    const error = CheckFetcherOption.checkType(optionsFromConfig, 'number', key, fetcherMetaInfo.name);
                    if(error) {
                        errors.push(error);
                    }
                    break;
                }
                case Type.Date: {
                    //TODO Object.prototype.toString.call(date) === '[object Date]'
                    break;
                }
                case Type.Boolean: {
                    //TODO x === true || x === false
                    break;
                }
                default: {
                    throw new Error(`You have forgotten to implements the ${fetcherOptions[key]} type in CheckerFetcherOptions`);
                }
            }
        });
        return errors;
    }

    private static checkType(optionsFromConfig: FetcherFromConfig, type: string, optionName: string, fetcherName: string): string {
        if(typeof optionsFromConfig.options[optionName] !== type) {
            return `The option ${optionName} for ${fetcherName} need to be a ${type}!`;
        }
    }

}