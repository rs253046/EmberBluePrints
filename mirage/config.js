 export default function() {
  this.namespace = 'https://localhost:3000/api/v1';
  let rentals = [{
    type: 'cruds',
    id: '1',
    attributes: {
      name: 'Grand Old Mansion',
      class: true
    }
  }, {
    type: 'cruds',
    id: '2',
    attributes: {
      name: 'Urban Living',
      class: true
    }
  }, {
    type: 'cruds',
    id: '3',
    attributes: {
      name: 'Downtown Charm',
      class: false
    }
  }];

  this.get('/cruds');
  this.post('cruds');
  
}
