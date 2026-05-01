class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const uniques = []
        for (let i = 0 ; i < emails.length ; ++i){
            const mail = this.resolver(emails[i])
            if(!uniques.includes(mail)){
                uniques.push(mail)
            }
        }
        return uniques.length
    }

    resolver(email) {
        const [mail , domain] = email.split("@");
        const remaning = mail.split("+")[0].replace(/\./g, "");
        return remaning + "@" + domain
    }
}
