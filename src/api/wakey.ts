import axios from 'axios';
import { logger } from './utils/index.util';

const ping = async () => {
    try{
        const { data } = await axios.get(`${process.env.SERVER_BASE_URL}/ping`);
        logger.info(`Server pinged successfully: ${data.message}! Status code is ${data.status} & Status text is ${data.statusText}`);
    } catch(e: any) {
        logger.info(`this the error message: ${e.message}`); 
    }
};

setInterval(ping, parseFloat(<string>process.env.TIME_TO_PING))