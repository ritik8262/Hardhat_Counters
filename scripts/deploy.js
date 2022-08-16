const { ethers } = require("hardhat")

const main = async () => {
    const counter = await ethers.getContractFactory("Counter")
    const counterContract = await counter.deploy("My Contract", 1)
    console.log("Contract deployed to: ", counterContract.address)

    const add = await counterContract.increment()

    const subtract = await counterContract.decrement()

    const retrieveCount = await counterContract.getCount()

    const retrieveName = await counterContract.getName()

    const newName = await counterContract.setName("New Name")
}
const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
runMain()
