const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Counter", async () => {
    let counter

    beforeEach(async () => {
        const Counter = await ethers.getContractFactory("Counter")
        counter = await Counter.deploy("My Counter", 1)
    })
    describe("Deployment", () => {
        it("sets the initial count", async () => {
            // const count = await counter.count()
            expect(await counter.count()).to.equal(1)
        })

        it("sets the inital name", async () => {
            // const name = await counter.name()
            expect(await counter.name()).to.equal("My Counter")
        })
    })

    describe("Counting", () => {
        let transaction
        let count

        it('reads the count from the "count" public variable', async () => {
            expect(await counter.count()).to.equal(1)
        })

        it('reads the count from the "getCount()" fucntion', async () => {
            expect(await counter.getCount()).to.equal(1)
        })

        it("increments the count", async () => {
            transaction = await counter.increment()
            await transaction.wait()
            count = await counter.count()
            expect(count).to.equal(2)

            transaction = await counter.increment()
            await transaction.wait()
            count = await counter.count()
            expect(count).to.equal(3)
        })

        it("decrements the count", async () => {
            transaction = await counter.decrement()
            await transaction.wait()
            count = await counter.count()
            expect(count).to.equal(0)

            // Cannot decrement count below 0
            await expect(counter.decrement()).to.be.reverted

            // transaction = await counter.increment()
            // await transaction.wait()
            // count = await counter.count()
            // expect(count).to.equal(3)
        })

        it('reads the name from the "name" public variable', async () => {
            expect(await counter.name()).to.equal("My Counter")
        })

        it('reads the name from "getName()" function', async () => {
            expect(await counter.getName()).to.equal("My Counter")
        })

        it("updates the name", async () => {
            transaction = await counter.setName("Ritik_Singla")
            await transaction.wait()
            expect(await counter.name()).to.equal("Ritik_Singla")
        })
    })
})
