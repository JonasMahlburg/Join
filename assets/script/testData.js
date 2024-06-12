// Das sind unsere Testdaten. Sie helfen uns. Sie sind Freunde.

let user = [
   {
      "name": "Frodo Baggins",
      "id": 1,
      "email": "frodo@shire.com",
      "password": "ringBearer1",
      "phone": "1234567890",
      "first_two_letters": "FB",
   },
   {
      "name": "Samwise Gamgee",
      "id": 2,
      "email": "sam@shire.com",
      "password": "loyalGardener2",
      "phone": "1234567891",
      "first_two_letters": "SG",
   },
   {
      "name": "Aragorn",
      "id": 3,
      "email": "aragorn@gondor.com",
      "password": "kingReturn3",
      "phone": "1234567892",
      "first_two_letters": "AR",
   },
   {
      "name": "Legolas",
      "id": 4,
      "email": "legolas@mirkwood.com",
      "password": "elfPrince4",
      "phone": "1234567893",
      "first_two_letters": "LE",
   },
   {
      "name": "Gandalf",
      "id": 5,
      "email": "gandalf@middleearth.com",
      "password": "wizardGrey5",
      "phone": "1234567894",
      "first_two_letters": "GA",
   },
];

let contacts = [
   {
      "name": "Boromir",
      "id": 6,
      "email": "boromir@gondor.com",
      "phone": "1234567895",
      "first_two_letters": "BO",
   },
   {
      "name": "Gimli",
      "id": 7,
      "email": "gimli@erebor.com",
      "phone": "1234567896",
      "first_two_letters": "GI",
   },
   {
      "name": "Saruman",
      "id": 8,
      "email": "saruman@isengard.com",
      "phone": "1234567897",
      "first_two_letters": "SA",
   },
   {
      "name": "Galadriel",
      "id": 9,
      "email": "galadriel@lorien.com",
      "phone": "1234567898",
      "first_two_letters": "GA",
   },
   {
      "name": "Elrond",
      "id": 10,
      "email": "elrond@rivendell.com",
      "phone": "1234567899",
      "first_two_letters": "EL",
   },
   {
      "name": "Eowyn",
      "id": 11,
      "email": "eowyn@rohan.com",
      "phone": "1234567800",
      "first_two_letters": "EO",
   },
   {
      "name": "Faramir",
      "id": 12,
      "email": "faramir@gondor.com",
      "phone": "1234567801",
      "first_two_letters": "FA",
   },
   {
      "name": "Merry",
      "id": 13,
      "email": "merry@shire.com",
      "phone": "1234567802",
      "first_two_letters": "ME",
   },
   {
      "name": "Pippin",
      "id": 14,
      "email": "pippin@shire.com",
      "phone": "1234567803",
      "first_two_letters": "PI",
   },
   {
      "name": "Théoden",
      "id": 15,
      "email": "theoden@rohan.com",
      "phone": "1234567804",
      "first_two_letters": "TH",
   },
   {
      "name": "Treebeard",
      "id": 16,
      "email": "treebeard@fangorn.com",
      "phone": "1234567805",
      "first_two_letters": "TR",
   },
   {
      "name": "Sauron",
      "id": 17,
      "email": "sauron@mordor.com",
      "phone": "1234567806",
      "first_two_letters": "SA",
   },
   {
      "name": "Gollum",
      "id": 18,
      "email": "gollum@mistymountains.com",
      "phone": "1234567807",
      "first_two_letters": "GO",
   },
   {
      "name": "Bilbo Baggins",
      "id": 19,
      "email": "bilbo@shire.com",
      "phone": "1234567808",
      "first_two_letters": "BB",
   },
   {
      "name": "Arwen",
      "id": 20,
      "email": "arwen@rivendell.com",
      "phone": "1234567809",
      "first_two_letters": "AR",
   },
];

let tasks = [
   {
      "name": "Destroy the One Ring",
      "id": 31,
      "description": "Take the One Ring to Mount Doom and destroy it.",
      "category": "User Story",
      "priority": "high",
      "due_date": "12/19/2024",
      "state": "todo",
      "assigned_user": [
         { "name": "Frodo Baggins", "first_two_letters": "FB" },
         { "name": "Samwise Gamgee", "first_two_letters": "SG" },
      ],
      "subtasks": [
         { "subtask_name": "Reach Rivendell", "subtask_isdone": true },
         { "subtask_name": "Pass through Moria", "subtask_isdone": false },
      ],
   },
   {
      "name": "Defend Helm's Deep",
      "id": 32,
      "description": "Defend the fortress of Helm's Deep against Saruman's army.",
      "category": "User Story",
      "priority": "high",
      "due_date": "06/15/2024",
      "state": "inprogress",
      "assigned_user": [
         { "name": "Aragorn", "first_two_letters": "AR" },
         { "name": "Legolas", "first_two_letters": "LE" },
         { "name": "Gimli", "first_two_letters": "GI" },
      ],
      "subtasks": [
         { "subtask_name": "Rally the troops", "subtask_isdone": true },
         { "subtask_name": "Fortify the walls", "subtask_isdone": true },
      ],
   },
   {
      "name": "Rescue Merry and Pippin",
      "id": 33,
      "description": "Find and rescue Merry and Pippin from the Uruk-hai.",
      "category": "User Story",
      "priority": "medium",
      "due_date": "05/05/2024",
      "state": "done",
      "assigned_user": [
         { "name": "Aragorn", "first_two_letters": "AR" },
         { "name": "Legolas", "first_two_letters": "LE" },
         { "name": "Gimli", "first_two_letters": "GI" },
      ],
      "subtasks": [
         { "subtask_name": "Track the Uruk-hai", "subtask_isdone": true },
         { "subtask_name": "Rescue Merry and Pippin", "subtask_isdone": true },
      ],
   },
   {
      "name": "Form the Fellowship",
      "id": 34,
      "description": "Create a fellowship to destroy the One Ring.",
      "category": "User Story",
      "priority": "high",
      "due_date": "02/15/2024",
      "state": "done",
      "assigned_user": [
         { "name": "Gandalf", "first_two_letters": "GA" },
         { "name": "Elrond", "first_two_letters": "EL" },
      ],
      "subtasks": [
         { "subtask_name": "Gather members", "subtask_isdone": true },
         { "subtask_name": "Swear oaths", "subtask_isdone": true },
      ],
   },
   {
      "name": "Journey to the Black Gate",
      "id": 35,
      "description": "Distract Sauron's eye by attacking the Black Gate.",
      "category": "User Story",
      "priority": "high",
      "due_date": "10/15/2024",
      "state": "inprogress",
      "assigned_user": [
         { "name": "Aragorn", "first_two_letters": "AR" },
         { "name": "Gimli", "first_two_letters": "GI" },
         { "name": "Legolas", "first_two_letters": "LE" },
      ],
      "subtasks": [
         { "subtask_name": "Prepare the army", "subtask_isdone": true },
         { "subtask_name": "March to the Black Gate", "subtask_isdone": false },
      ],
   },
   {
      "name": "Reclaim Minas Tirith",
      "id": 36,
      "description": "Defend Minas Tirith from Sauron's forces.",
      "category": "User Story",
      "priority": "high",
      "due_date": "08/20/2024",
      "state": "inprogress",
      "assigned_user": [
         { "name": "Gandalf", "first_two_letters": "GA" },
         { "name": "Pippin", "first_two_letters": "PI" },
         { "name": "Faramir", "first_two_letters": "FA" },
      ],
      "subtasks": [
         { "subtask_name": "Defend the gates", "subtask_isdone": true },
         { "subtask_name": "Protect the citizens", "subtask_isdone": true },
      ],
   },
   {
      "name": "Destroy Isengard",
      "id": 37,
      "description": "Attack Isengard and defeat Saruman.",
      "category": "User Story",
      "priority": "high",
      "due_date": "07/01/2024",
      "state": "done",
      "assigned_user": [
         { "name": "Treebeard", "first_two_letters": "TR" },
         { "name": "Merry", "first_two_letters": "ME" },
         { "name": "Pippin", "first_two_letters": "PI" },
      ],
      "subtasks": [
         { "subtask_name": "Rally the Ents", "subtask_isdone": true },
         { "subtask_name": "Destroy the dam", "subtask_isdone": true },
      ],
   },
   {
      "name": "Guide Frodo and Sam",
      "id": 38,
      "description": "Guide Frodo and Sam to Mordor.",
      "category": "User Story",
      "priority": "medium",
      "due_date": "09/10/2024",
      "state": "done",
      "assigned_user": [{ "name": "Gollum", "first_two_letters": "GO" }],
      "subtasks": [
         { "subtask_name": "Lead through the Dead Marshes", "subtask_isdone": true },
         { "subtask_name": "Avoid capture by Faramir", "subtask_isdone": true },
      ],
   },
   {
      "name": "Heal Théoden",
      "id": 39,
      "description": "Free King Théoden from Saruman's influence.",
      "category": "User Story",
      "priority": "high",
      "due_date": "03/15/2024",
      "state": "done",
      "assigned_user": [{ "name": "Gandalf", "first_two_letters": "GA" }],
      "subtasks": [
         { "subtask_name": "Enter Meduseld", "subtask_isdone": true },
         { "subtask_name": "Confront Saruman", "subtask_isdone": true },
      ],
   },
   {
      "name": "Defeat the Balrog",
      "id": 40,
      "description": "Battle and defeat the Balrog in Moria.",
      "category": "User Story",
      "priority": "high",
      "due_date": "04/05/2024",
      "state": "done",
      "assigned_user": [{ "name": "Gandalf", "first_two_letters": "GA" }],
      "subtasks": [
         { "subtask_name": "Confront the Balrog", "subtask_isdone": true },
         { "subtask_name": "Battle on the Bridge of Khazad-dûm", "subtask_isdone": true },
      ],
   },
];
