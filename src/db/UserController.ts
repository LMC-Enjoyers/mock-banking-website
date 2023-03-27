import "reflect-metadata"
import { AppDataSource } from "./data_source"
import { User } from "./entity/user.entity"

AppDataSource.initialize()
      .then(async () => {
          console.log("Data Source has been initialized!")
          const userRepository = AppDataSource.getRepository(User);
          const rows = await userRepository.find();
          console.log(rows)
      })
      .catch((err) => {
          console.error("Error during Data Source initialization", err)
      })