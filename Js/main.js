function findValueByKey(obj, companyName) {
        if (typeof obj !== 'object' || obj === null) {
        return null;
    }

        if (obj.hasOwnProperty('name') && obj.name === companyName) {
        return obj;
    }

        if (obj.hasOwnProperty('clients') && Array.isArray(obj.clients)) {
                for (const client of obj.clients) {
            const result = findValueByKey(client, companyName);
            if (result) {
                return result;
            }
        }
    }

        if (obj.hasOwnProperty('partners') && Array.isArray(obj.partners)) {
                for (const partner of obj.partners) {
            const result = findValueByKey(partner, companyName);
            if (result) {
                return result;
            }
        }
    }

        return null;
}

const company = {
    name: 'Company Name',
    clients: [
        { name: 'Клієнт 1.1' },
        { name: 'Клієнт 1.2' },
           ],
    partners: [
        { name: 'Партнер 1.1' },
        { name: 'Партнер 1.2' },
            ]
};

const result = findValueByKey(company, 'Клієнт 1.1');
console.log(result);