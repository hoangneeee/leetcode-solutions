// Link: https://leetcode.com/problems/validate-ip-address/
function validIPAddress(queryIP: string): string {
    if (queryIP.includes('.')) {
        const ipv4Pattern = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/;
        return ipv4Pattern.test(queryIP) ? 'IPv4' : 'Neither';
    } else if (queryIP.includes(':')) {
        const ipv6Pattern = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
        return ipv6Pattern.test(queryIP) ? 'IPv6' : 'Neither';
    }
    return 'Neither';   
};

console.log(validIPAddress("172.16.254.1"));
console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));
console.log(validIPAddress("256.256.256.256"));
console.log(validIPAddress("0.0.0.0"));
