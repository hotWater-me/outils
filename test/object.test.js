describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual outils.deepClone(null) should return true`, function () {
            let person = null
            assert.deepEqual(person, outils.deepClone(person))
        });

        it(`person deepEqual outils.deepClone('SlaneYang') should return true`, function () {
            let person = 'SlaneYang'
            assert.deepEqual(person, outils.deepClone(person))
        });

        it(`person deepEqual outils.deepClone(new Date()) should return true`, function () {
            let date = new Date()
            assert.deepEqual(date, outils.deepClone(date))
        });

        it(`person deepEqual outils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, outils.deepClone(person))
        });

        it(`person === outils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, outils.deepClone(person), true)
        });
    });

    describe('#isEmptyObject()', function () {
        it(`outils.isEmptyObject({}) should return true`, function () {
            assert(outils.deepClone({}))
        });

        it(`outils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(outils.isEmptyObject({
                one: 1
            }), true)
        });

        it(`outils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(outils.isEmptyObject([]), true)
        });
    });

    describe('#renameKeys()', function () {
        const objTest = {
           id: 1,
           name: '测试',
           age: 20
        };
        const convertMap = {
          id: 'renameID',
          name: 'renameName',
          age: 'renameAge',
        }
        it(`outils.renameKeys({}, {}) should return {}`, function () {
            const nullJudge = outils.renameKeys({}, {})
            assert.equal(JSON.stringify(nullJudge), '{}')
        });
        it(`outils.renameKeys(convertMap, objTest) should return true`, function () {
            assert.deepEqual(outils.renameKeys(convertMap, objTest), { renameID: 1, renameName: '测试', renameAge: 20 })
        });
    });
})