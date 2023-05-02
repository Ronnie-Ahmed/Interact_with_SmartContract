export const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addpeople",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "changeName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "accountName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_accountbalance",
        type: "uint256",
      },
    ],
    name: "changePeople",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "accountaddress",
        type: "address",
      },
    ],
    name: "checkBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mappeople",
    outputs: [
      {
        internalType: "string",
        name: "myname",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "student",
        type: "bool",
      },
      {
        internalType: "address",
        name: "accountaddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "accountbalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "people",
    outputs: [
      {
        internalType: "string",
        name: "myname",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "student",
        type: "bool",
      },
      {
        internalType: "address",
        name: "accountaddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "accountbalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "accountName",
        type: "string",
      },
    ],
    name: "showdetails",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "myname",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "student",
            type: "bool",
          },
          {
            internalType: "address",
            name: "accountaddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "accountbalance",
            type: "uint256",
          },
        ],
        internalType: "struct Lock.People",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "transferether",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
