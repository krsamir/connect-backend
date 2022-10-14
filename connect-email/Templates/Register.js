const register = ({ name, validTill, token, recipient, FRONTENDLINK }) => {
  const url = `${FRONTENDLINK}/verify?token=${token}&email=${recipient}&flag=true`;
  const decodedUrl = decodeURIComponent(url);
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome</title>
  </head>
  
  <body>
      <div>
          <div>
              <span>Welcome to <b>connect</b>, ${name}</span>
          </div>
          <a href="${decodedUrl}" target="_blank" rel="noopener noreferrer">Dive
              in</a><br>
          <span>This Link is valid till ${validTill}</span><br>
      </div>
  </body>
  
  
  </html>
    `;
};

export { register };
