export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('crud', 10);
  // server.createList('classic', 10);
  let pathLists = [
    'management',
    'class-manage',
    'class-management',
    'student',
    'classic-crud',
    'classic'
  ];

  
  pathLists.forEach((item) => {
   seedDatabase(server, item, 10);
  })
 
}

function seedDatabase(server, path, count) {
	server.createList(path, count);
}