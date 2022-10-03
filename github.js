function shodan_it(type) 
{
    
    site = document.getElementById('target').value;                            
    url = 'https://github.com/search?q=';
    url = url + site + " " ;

switch(type)
{
    case 1:
        url += 'api_key';
        break;
    case 2:
        url += 'app_AWS_SECRET_ACCESS_KEY ';
        break
    case 3:
        url += 'app_secret';
        break
    case 4:
        url += 'authoriztion';
        break;
    case 5:
        url += 'Ldap ';
        break;
    case 6:
        url += 'aws_access_key_id';
        break;
    case 7:
        url += 'secret';
        break;
    case 8:
        url += '.bash_history';
        break;
    case 9:
        url += 'bashrc%20password';
        break;
	case 10:
        url += 'beanstalkd.yml';
        break;
	case 11:
        url += 'client secret';
        break;
	case 12:
        url += 'composer.json';
        break;
	case 13:
        url += 'config';
        break;
	case 14:
        url += 'credentials';
        break;
	case 15:
        url += 'DB_PASSWORD' ;
        break;
	case 16:
        url += 'deploy.rake';
        break;
	case 17:
        url += '.env' ;
        break;
    case 18:
        url += 'secret_key=' ;
        break;
      case 19:
        url += 'User_secret=' ;
        break;
      case 20:
        url += '/django/next/admin/dashboard' ;
        break;
      case 21:
        url += 'admin_passwd=' ;
        break;
      case 22:
        url += 'Jenkins' ;
        break;
      case 23:
        url += 'oauth' ;
        break;
      case 24:
        url += 'authoriztion' ;
        break;
      case 25:
        url += 'password' ;
        break;
      case 26:
        url += 'pwd' ;
        break;
      case 27:
        url += 'ftp' ;
        break;
      case 28:
        url += 'JDBC' ;
        break;
      case 29:
        url += 'Authorization: Bearer' ;
        break;
      case 30:
        url += 'admin_passwd=' ;
        break;
      case 31:
        url += 'SecretAccessKey' ;
        break;
      case 32:
        url += 'ssh2_auth_password' ;
        break;
      case 33:
        url += 'connectionstring' ;
        break;
      case 34:
        url += 'security_credentials' ;
        break;
      case 35:
        url += 'send_key-keys' ;
        break;
      case 36:
        url += 'user' ;
        break;
      case 37:
        url += 'token' ;
        break;
      case 38:
        url += 'access_key' ;
        break;
      case 39:
        url += 'secret_access_key' ;
        break;
  case 40:
        url += 'bucket_password' ;
        break;
      case 41:
        url += 'redis_password' ;
        break;
    case 42:
        url += 'root_password' ;
        break;
      case 43:
        url += 'login-singin' ;
        break;
      case 44:
        url += 'passkey-passkeys' ;
        break;
      case 45:
        url += 'pass' ;
        break;
case 46:
        url += 'app_AWS_SECRET_ACCESS_KEY AWS_SECRET_ACCESS_KEY' ;
        break;
      case 47:
        url += 'admin' ;
        break;
      case 48:
        url += 'log' ;
        break;
      case 49:
        url += 'security_credentials' ;
        break;
      case 50:
        url += 'remove password' ;
        break;
      case 51:
        url += 'root' ;
        break;
      case 52:
        url += 'trash' ;
        break;
      case 53:
        url += 'FTP_PORT' ;
        break;
      case 54:
        url += 'DB_DATABASE=' ;
        break;
     case 55:
        url += 'DB_HOST=' ;
        break;
     case 56:
        url += 'DB_PORT=' ;
        break;
     case 57:
        url += 'DB_PASSWORD=' ;
        break;
     case 58:
        url += 'DB_PW=' ;
        break;
     case 59:
        url += 'DB_USER=' ;
        break;
     case 60:
        url += '"bucket_name"' ;
        break;
     case 61:
        url += 'GITHUB_TOKEN=' ;
        break;
     case 62:
        url += 'PATH=' ;
        break;
    case 63:
        url += 'FTP_PW=' ;
        break;
    case 64:
        url += 'FTP_LOGIN=' ;
        break;
    case 65:
        url += 'CODECLIMATE_REPO_TOKEN=' ;
        break;
    case 66:
        url += 'DOCKER_PASSWORD=' ;
        break;
    case 67:
        url += 'NPM_TOKEN=' ;
        break;
    case 68:
        url += 'GH_TOKEN=' ;
        break;
    case 69:
        url += 'ACCOUNT_SID=' ;
        break; 
    case 70:
        url += 'API_KEY_SID=' ;
        break;
    case 71:
        url += 'API_KEY_SECRET=' ;
        break;
    case 72:
        url += 'GITHUB_KEY=' ;
        break;
    case 73:
        url += 'FIREBASE_API_TOKEN=' ;
        break;
    case 74:
        url += 'USERNAME=' ;
        break;
    case 75:
        url += 'GITHUB_API_KEY=' ;
        break;
 case 76:
        url += '.mlab.com password' ;
        break;
    case 77:
        url += 'mysql' ;
        break;
    case 78:
        url += 'npmrc%20_auth' ;
        break; 
    case 79:
        url += 'passwd' ;
        break;
    case 80:
        url += 'passkey' ;
        break; 
    case 81:
        url += 'rds.amazonaws.com password' ;
        break; 
    case 82:
        url += 's3cfg' ;
        break;
    case 83:
        url += 'filename:.bash_profile aws' ;
        break;
    case 84:
        url += 'filename:.bashrc mailchimp' ;
        break; 
    case 85:
        url += 'filename:.bash_history' ;
        break;
    case 86:
        url += 'aws_access_key' ;
        break; 
    case 87:
        url += 'aws_secret_key' ;
        break;
    case 88:
        url += 'S3_BUCKET' ;
        break;
    case 89:
        url += 'S3_ACCESS_KEY_ID' ;
        break;
    case 90:
        url += 'S3_SECRET_ACCESS_KEY' ;
        break; 
    case 91:
        url += 'S3_ENDPOINT' ;
        break;  
    case 92:
        url += 'AWS_ACCESS_KEY_ID' ;
        break;
    case 93:
        url += 'list_aws_accounts' ;
        break;
    case 94:
        url += 'filename:database' ;
        break;
    case 95:
        url += 'filename:secrets.yml' ;
        break; 
     case 97:
        url += 'filename:LocalSettings.php' ;
        break;
    case 98:
        url += 'filename:config.php' ;
        break; 
    case 99:
        url += 'filename:config.inc.php' ;
        break;
    case 100:
        url += 'filename:configuration.php' ;
        break;
    case 101:
        url += 'git-credentials' ;
        break;
    case 102:
        url += 'github_token' ;
        break;
    case 103:
        url += 'filename:wp-config.php' ;
        break;
    case 104:
        url += 'filename:credentials' ;
        break;
    case 105:
        url += 'filename:id_rsa' ;
        break;
    case 106:
        url += 'filename:id_dsa' ;
        break;
    case 107:
        url += 'filename:.sqlite' ;
        break;
    case 108:
        url += 'filename:secret_token.rb' ;
        break;
    case 109:
        url += 'filename:settings.py' ;
        break;
    case 110:
        url += 'filename:credentials.xml' ;
        break;
    case 111:
        url += 'filename:sftp-config.json password' ;
        break;
    case 112:
        url += 'filename:.s3cfg' ;
        break;
    case 113:
        url += 'filename:config.php dbpasswd' ;
        break;
    case 114:
        url += 'filename:.bashrc password' ;
        break;
    case 115:
        url += 'filename:.esmtprc password' ;
        break;
    case 116:
        url += 'filename:.netrc password' ;
        break;
    case 117:
        url += 'filename:_netrc password' ;
        break;
    case 118:
        url += 'filename:.env MAIL_HOST=smtp.gmail.com' ;
        break;
    case 119:
        url += 'filename:prod.exs NOT prod.secret.exs' ;
        break;
    case 120:
        url += 'filename:.npmrc _auth' ;
        break;
    case 121:
        url += 'filename:WebServers.xml' ;
        break;
    case 122:
        url += 'filename:sftp-config.json' ;
        break;
    case 123:
        url += 'filename:.esmtprc password' ;
        break;
    case 124:
        url += 'filename:passwd path:etc' ;
        break;
    case 125:
        url += 'filename:prod.secret.exs' ;
        break;
    case 126:
        url += 'filename:proftpdpasswd' ;
        break;
    case 127:
        url += 'filename:travis.yml' ;
        break;
    case 128:
        url += 'filename:vim_settings.xml' ;
        break;
    case 129:
        url += 'filename:sftp.json path:.vscode' ;
        break;
    case 130:
        url += 'filename:secrets.yml password' ;
        break;
    case 131:
        url += 'extension:sql mysql dump' ;
        break;
    case 132:
        url += 'extension:sql mysql dump password' ;
        break;
    case 133:
        url += 'extension:pem private' ;
        break;
    case 134:
        url += 'extension:ppk private' ;
        break;
    case 135:
        url += 'gh_token' ;
        break;
    case 136:
        url += 'github_key' ;
        break;
    case 137:
        url += 'github_token' ;
        break;
    case 138:
        url += 'gitlab' ;
        break;
    case 139:
        url += 'gmail_password' ;
        break;
    case 140:
        url += 'gmail_user' ;
        break;
    case 141:
        url += 'herokuapp' ;
        break;
    case 142:
        url += 'internal' ;
        break;
    case 143:
        url += 'irc_pass' ;
        break;
    case 144:
        url += 'ftp' ;
        break;
    case 145:
        url += 'firebase' ;
        break;
    case 146:
        url += '.mlab.com password' ;
        break;
    case 147:
        url += 'app_key' ;
        break;
    case 148:
        url += 'access_token' ;
        break;
    case 149:
        url += 'api.googlemaps AIza' ;
        break;
    case 150:
        url += 'appkeysecret' ;
        break;
    case 151:
        url += 'application_key' ;
        break;
    case 152:
        url += 'appsecret' ;
        break;
    case 153:
        url += 'appspot' ;
        break;
    case 154:
        url += 'auth' ;
        break;
    case 155:
        url += 'auth_token' ;
        break;
    case 156:
        url += 'authorizationToken' ;
        break;
    case 157:
        url += 'bashrc password' ;
        break;
    case 158:
        url += 'bucket_password' ;
        break;
    case 159:
        url += 'api_secret' ;
        break;
    case 160:
        url += 'apidocs' ;
        break;
    case 161:
        url += 'apikey' ;
        break;
    case 162:
        url += 'client_secret' ;
        break;
    case 163:
        url += 'cloudfront' ;
        break;
    case 164:
        url += 'codecov_token' ;
        break;
    case 165:
        url += 'conn.login' ;
        break;
    case 166:
        url += 'connectingstring' ;
        break;
    case 167:
        url += 'consumer_key' ;
        break;
    case 168:
        url += 'credentials' ;
        break;
     case 169:
        url += 'database_password' ;
        break;
    case 170:
        url += 'db_password' ;
        break;
    case 171:
        url += 'db_username' ;
        break;
    case 172:
        url += 'dbpasswd' ;
        break;
    case 173:
        url += 'dbpassword' ;
        break;
    case 174:
        url += 'dbuser' ;
        break;
    case 175:
        url += 'dot-files' ;
        break;
    case 176:
        url += 'dotfiles' ;
        break;
    case 177:
        url += 'encryption_key' ;
        break;
    case 178:
        url += 'fabricApiSecret' ;
        break;
    case 179:
        url += 'fb_secret' ;
        break;
    case 180:
        url += 'JEKULL_GITHUB_TOKEN' ;
        break;
    case 181:
        url += 'key' ;
        break;
    case 182:
        url += 'keypassword' ;
        break;
    case 183:
        url += 'ldap_password' ;
        break;
    case 184:
        url += 'ldap_username' ;
        break;
    case 185:
        url += 'login' ;
        break;
    case 186:
        url += 'mailchimp' ;
        break;
    case 187:
        url += 'mailgun' ;
        break;
    case 188:
        url += 'master_key' ;
        break;
    case 189:
        url += 'mydotfiles' ;
        break;
    case 190:
        url += 'mysql' ;
        break;
    case 191:
        url += 'node_env' ;
        break;
    case 192:
        url += 'npmrc _auth' ;
        break;
    case 193:
        url += 'oauth_token' ;
        break;
    case 194:
        url += 'pass' ;
        break;
    case 195:
        url += 'passwd' ;
        break;
    case 196:
        url += 'passwords' ;
        break;
    case 197:
        url += 'pem private' ;
        break;
    case 198:
        url += 'prod' ;
        break;
    case 199:
        url += 'private_key' ;
        break;
    case 200:
        url += 'preprod' ;
        break;
   case 201:
        url += 'pwds' ;
        break;

      



}
    window.open(url);

}