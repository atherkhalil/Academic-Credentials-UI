export const issuerTypes = ["ACCREDITED", "NON-ACCREDITED", "EMPLOYER"];

export const mainNavLink = {
    MOE: [
      {
        icon: "ri-grid-fill",
        name: "Dashboard",
        path: "moe/dashboard",
      },
      {
        icon: "ri-user-fill",
        name: "Profile",
        path: "moe/settings/profile",
      },
      {
        icon: "ri-empathize-fill",
        name: "Accredited Institutes",
        path: "moe/accredited-institutes",
      },
      {
        icon: "ri-hand-coin-fill",
        name: "Credentials",
        path: "moe/credentials",
      },
      {
        icon: "ri-upload-cloud-2-fill",
        name: "Equivalency",
        path: "moe/equivalency",
      },
    ],
    ISSUER: [
      {
        icon: "ri-grid-fill",
        name: "Dashboard",
        path: "issuer/dashboard",
      },
      {
        icon: "ri-user-fill",
        name: "Profile",
        path: "issuer/settings/profile",
      },
      {
        icon: "ri-hand-coin-fill",
        name: "Courses",
        path: "issuer/courses",
      },
      {
        icon: "ri-empathize-fill",
        name: "Students",
        path: "issuer/students",
      }
    ],
    LEARNER: [
      {
        icon: "ri-grid-fill",
        name: "Dashboard",
        path: "issuer/dashboard",
      },
      {
        icon: "ri-user-fill",
        name: "Profile",
        path: "issuer/settings/profile",
      },
    ],
  };

export const profileNavigation = {
    MOE: [
        {
            key: 0,
            title: "Profile"   
        },
        {
            key: 1,
            title: "Signatures"   
        },
        {
            key: 2,
            title: "Digital signature keys"   
        },
    ],
    ISSUER: [
        {
            key: 0,
            title: "Profile"   
        },
        {
            key: 1,
            title: "Signatures"   
        },
        {
            key: 2,
            title: "Digital signature keys"   
        },
        {
            key: 3,
            title: "Affiliated bodies"   
        },
    ]
};

export const credentialTypes = ["ACADEMIC", "EMPLOYMENT"];

export const studentsList = [
  {
    _id: "239023029fjdskf",
    id: "0001",
    firstName: "Mrs.",
    lastName: "Alis",
    courseSession: "4 Years",
    publicKey: "vRFy4g2/bRvIHpt3fbr4LA=="
  },
  {
    _id: "239023029fjdskf",
    id: "0002",
    firstName: "Mr.",
    lastName: "Bob",
    courseSession: "4 Years",
    publicKey: "xLAOEFPZ/PWo1HtiUhLbeQ=="
  },
];

export const issuersList = [
  {
    _id: "239023029fjdskf",
    id: "20010",
    name: "Mr Shawn",
    url: "url",
    country: "Australia"
  },
  {
    _id: "23909022229fjska",
    id: "20011",
    name: "Mr Eminem",
    url: "url",
    country: "USA"
  },
];

export const genderTypes = ["MALE", "FEMALE"];