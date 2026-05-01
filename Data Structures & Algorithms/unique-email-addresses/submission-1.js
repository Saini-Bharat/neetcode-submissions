class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const map = new Set()
        for (let i = 0 ; i < emails.length ; ++i){
            const mail = this.resolver(emails[i])
            map.add(mail)
        }
        return map.size
    }

    resolver(email) {
        const [mail , domain] = email.split("@");
        const remaning = mail.split("+")[0].replace(/\./g, "")
        return remaning + "@" + domain
    }
}
