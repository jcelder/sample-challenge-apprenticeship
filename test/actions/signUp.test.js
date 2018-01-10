import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions';

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    const testUser = {
      email: 'test@test.com',
      name: 'test',
      password: 'test'
    }
    return signUp(testUser)
      .then((userId) => {
        expect(userId.user_id).to.equal(1)
      })
  })
})
