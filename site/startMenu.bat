@ECHO OFF

ECHO.
ECHO Choose local server:
ECHO.
ECHO 1 - Python http.server (5500)
ECHO 2 - Node npx serve (5500)
ECHO 3 - Deno file server (5500)
ECHO 4 - Firebase serve (5500)
ECHO 5 - Firebase deploy
ECHO.

SET /P choice=Enter choice (1-5): 

IF "%choice%"=="1" (
    py -m http.server 5500
    GOTO END
)

IF "%choice%"=="2" (
    npx serve -l 5500 .
    GOTO END
)

IF "%choice%"=="3" (
    deno run -A jsr:@std/http/file-server --port 5500
    GOTO END
)

IF "%choice%"=="4" (
    firebase serve --port 5500
    GOTO END
)

IF "%choice%"=="5" (
    firebase deploy --only hosting
    GOTO END
)

ECHO Invalid choice.

:END
