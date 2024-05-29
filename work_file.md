==> authentication by jsonwebtoken
sign-up form give username to backend,
from username and secret key, jsonwentoken generates token that sent to frontend
in frontend, token saved in cookie with expiration time then authentication applied that if token exists then move to the home page otherwise access only on "/sign-in" and "/sign-up" pages