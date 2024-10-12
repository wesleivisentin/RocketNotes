const UserCreateService = require("./UserCreateService")
const UseRepositoryInMemory = require("../repositories/UseRepositoryInMemory");
const UserRepositoryInMemory = require("../repositories/UseRepositoryInMemory");
const AppError = require("../utils/AppError");

describe("UserCreateService", () => {

    let useRepositoryInMemory = null
    let userCreateService = null

    beforeEach(() =>{
        useRepositoryInMemory = new UseRepositoryInMemory()
        userCreateService = new UserCreateService(useRepositoryInMemory);
    })

    it("user should be create", async () => {
        const user = {
            name: "User Test",
            email: "user@test.com",
            password: "123"
        };

  
        const userCreated = await userCreateService.execute(user);

        expect(userCreated).toHaveProperty("id")

    })

    it("user not should be create with exists email", async () => {
        const user1 = {
            name: "User test 1",
            email: "user@test.com",
            password: "123"
        }

        const user2 = {
            name: "User test 2",
            email: "user@test.com",
            password: "456"
        }

    

        await userCreateService.execute(user1);
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso."))
    })

})
