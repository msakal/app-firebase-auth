# Sobre o Expo EAS Build

## Sites importantes:

https://expo.dev/

https://expo.dev/eas

https://docs.expo.dev/build/introduction/

https://docs.expo.dev/build/setup/

## Formatos de arquivos compilados para as plataformas

- iOS: extensão IPA 

- Android: extensão APK (uso geral) e extensão .AAB (otimizada para loja Play Store)

## Roteiro geral de compilação no EAS

1. Acessar sua conta Expo no site expo.dev
2. Criar um projeto colocando o nome do aplicativo (isso também gera um nome simplificado no campo slug).

Obs: isso criará um IDENTIFICADOR para seu projeto.

3. Instalar o eas-cli: `npm install --global eas-cli`
4. Verificar se está logado usando: `eas whoami`

Obs.: Se estiver logado com a conta errada (ou outra), faça `eas logout`, e em seguida use `eas login` para entrar com suas credenciais.

5. Acesse a pasta do projeto do app que deseja compilar, e execute o comando `eas init --id CÓDIGO-ID-DO-SEU-PROJETO-CRIADO-NO-EXPO-DEV`