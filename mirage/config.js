export default function() {
  this.urlPrefix = 'https://localhost:3000/';
  this.namespace = 'api/v1/';

  let pathLists = [
    'managements',
    'class-manages',
    'class-managements',
    'students',
    'classic-cruds',
    'classics'
  ];

  // rest services for different generators
  pathLists.forEach((item) => {
    restServices(this, item);
  });

}

function restServices(self, path) {
  self.post(`${path}`);
  self.get(`${path}`);
  self.get(`${path}/:id`);
  self.put(`${path}/:id`);
  self.patch(`${path}/:id`);
  self.del(`${path}/:id`);
}