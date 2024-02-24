var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    },
];

var trustedEmails = arr.filter(function(item) {
    return /^(?:[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*)@(?:gmail\.com|yahoo\.com)$/.test(item.email);
});

console.log(trustedEmails);

//АБО


/*const arr = [
    {
      userName: 'Test',
      lastName: 'Test',
      email: 'test.test@gmail.com',
    },
    {
      userName: 'Dmitro',
      lastName: 'Porohov',
      email: 'dmitro.porohov@yahoo.com',
    },
    {
      userName: 'Andrii',
      lastName: '',
      email: 'andrii@mail.ru', 
    },
  ];

    const domainFilterRegex = /@(gmail\.com|yahoo\.com)$/;

   const filteredEmails = arr.filter((obj) =>
    obj.email.match(domainFilterRegex)
  );

  console.log('Filtered Emails:', filteredEmails);*/