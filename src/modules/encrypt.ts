import { createHash, createHmac, createCipher, createDecipher } from 'crypto'

export function MD5(data) {
	var hash = createHash('md5')
	hash.update(data)
	return hash.digest('hex')
}

export function Hmac(data) {
	const hmac = createHmac('md5', 'secret-key')
	hmac.update(data)
	return hmac.digest('hex')
}

export function Cipher(data, key) {
	const cipher = createCipher('aes-128-ecb', key)
	var crypted = cipher.update(data, 'utf8', 'hex')
	crypted += cipher.final('hex')
	return crypted
}

export function Decipher(encrypted, key) {
	const decipher = createDecipher('aes-128-ecb', key)
	var decrypted = decipher.update(encrypted, 'hex', 'utf8')
	decrypted += decipher.final('utf8')
	return decrypted
}



/*

AES  对称加密解密  安全级别--->
算法 aes192 aes-128-ecb aes-256-cbc

MD5  哈希加密  安全级别--->
算法 md5 sha1 sha256 sha512

Hmac  哈希加密 安全级别--->
算法 md5 sha1 sha256 sha512

*/