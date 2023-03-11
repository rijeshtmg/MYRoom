import * as config from '../config.js';

export const emailTemplate =(email, content, replyto, subject) => {
    //
   return {
    Source: config.EMAIL_FROM,
    Destination: {  /* req.body.email */
        ToAddresses: [email],
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data:`
                    <html>
                        <h1>Welcome to Realist App</h1>
                        ${content}
                    </html>
                `,
            },
        },
        Subject: {
            Charset: "UTF-8",
            Data:`Welcome to Myroom</h1>`,
        },
    },
};

};
