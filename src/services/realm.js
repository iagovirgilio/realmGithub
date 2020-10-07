import Realm from 'realm';

import RepositorySchema from '../schemas/RepopsitorySchema';

export default function getRealm() {
  return Realm.open({
    schema: [RepositorySchema],
  })
}
