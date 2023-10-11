const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        let band = await Band.create({
            name: "Smashmouth",
            genre: "greatest"
        });

        expect(band).toEqual(
            expect.objectContaining({
                name: "Smashmouth",
                genre: "greatest"
            })
        );
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician

        let musician = await Musician.create({
            name: "Beyonce",
            instrument: "vocals"
        }) 
        expect(musician).toEqual(
            expect.objectContaining({
                name: "Beyonce",
                instrument: "vocals"
            })
        );
    })

    test('can create a Song', async () => {
        // TODO - test updating a band
        let song = await Song.create({
            title: "Virgo's Groove",
            year: 2023,
            length: 5
        })
        expect(song).toEqual(
            expect.objectContaining({
                title: "Virgo's Groove",
                year: 2023,
                length: 5
            })
        );
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        let band = await Band.create({
            name: "Smashmouth",
            genre: "greatest"
        });

        band.name = "No Doubt";
        await band.save();
        expect(band).toEqual(
            expect.objectContaining({
                name: "No Doubt",
                genre: "greatest"
            })
        );
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        let musician = await Musician.create({
            name: "Fats Waller",
            instrument: "piano"
        });

        musician.instrument = "Keyboard";
        await musician.save();

        expect(musician).toEqual(
            expect.objectContaining({
                name: "Fats Waller",
                instrument: "Keyboard"
            })
        );
    })

    test('can update a Song', async () => {
        // TODO - test updating a musician
        let song = await Song.create({
            title: "Happy Bday",
            year: 2001,
            length: 5
        });

        song.title = "Whenever, Wherever";
        song.length = 4;

        await song.save();

        expect(song).toEqual(
            expect.objectContaining({
                title: "Whenever, Wherever",
                year: 2001,
                length: 4
            })
        );
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        let band = await Band.create({
            name: "Smashmouth",
            genre: "greatest"
        });

        let deletedBand = await band.destroy();

        expect(deletedBand).toEqual(
            expect.objectContaining({
                name: "Smashmouth",
                genre: "greatest"
            })
        );
    })

    test('can delete a Song', async () => {
        // TODO - test deleting a band
        let song = await Song.create({
            title: "Happy Bday",
            year: 2001,
            length: 5
        });

        let deletedSong = await song.destroy();

        expect(deletedSong).toEqual(
            expect.objectContaining({
                title: "Happy Bday",
                year: 2001,
                length: 5
            })
        );
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        let musician = await Musician.create({
            name: "Jelly Roll",
            instrument: "piano"
        });

        let deletedMusician = await musician.destroy();
        expect(deletedMusician).toEqual(
            expect.objectContaining({
                name: "Jelly Roll",
                instrument: "piano"
            })
        )
    })
})