import * as B from "../src/briefly";

console.log = s => {
	process.stdout.write(s + "\n");
};

describe("Briefly", () => {
	const originalDate = "2017-10-08T07:00:00.000Z";

	describe("Test formatISO", () => {
		it("should convert to iso string", () => {
			const dateWithSpaces = originalDate.replace("T", " ");
			const spacesDate = B.formatISO(dateWithSpaces);
			const noSpaceDate = B.formatISO(originalDate);

			const expectDate = new Date(originalDate).toISOString();

			expect(spacesDate).toEqual(expectDate);
			expect(noSpaceDate).toEqual(expectDate);
		});
	});

	describe("Test leadZeroes", () => {
		it("should lead zeroes", () => {
			const stringNum = "1";

			expect(B.leadZeroes(stringNum)).toEqual("01");
		});
	});

	describe("Test ddmmyyISO", () => {
		it("should generate a ddmmyyISO Date", () => {
			const d = new Date();

			const day = d.getDate().toString();
			const month = (d.getMonth() + 1).toString();
			const year = d.getFullYear().toString();

			const ddmmyyISODate = `${year}-${B.leadZeroes(month)}-${B.leadZeroes(
				day,
			)}`;

			expect(B.ddmmyyISO()).toEqual(ddmmyyISODate);
		});
	});

	describe("Test ddmmyyyy", () => {
		it("should return a date string with format DD/MM/YYYY", () => {
			const expectDate = "08/10/2017";

			expect(B.ddmmyyyy(originalDate)).toEqual(expectDate);
		});
	});

	describe("Test ddmm", () => {
		it("should return a date string with format DD/MM", () => {
			const expectDate = "08/10";

			expect(B.ddmm(originalDate)).toEqual(expectDate);
		});
	});

	describe("Test hhmm", () => {
		it("should return only HH:MM string of the date", () => {
			const expectDate = "04:00";

			expect(B.hhmm(originalDate)).toEqual(expectDate);
		});
	});

	describe("Test hhmmddmm", () => {
		it("should return date in HH:MM DD/MM format", () => {
			const expectDate = "04:00 08/10";

			expect(B.hhmmddmm(originalDate)).toEqual(expectDate);
		});
	});

	describe("Test hhmmss", () => {
		it("should return date formated as HH:MM:SS", () => {
			const expectDate = "04:00:00";

			expect(B.hhmmss(originalDate)).toEqual(expectDate);
		});
	});

	describe("Test weekDayFull", () => {
		it("should return date as week day fullname string", () => {
			expect(B.weekDayFull(originalDate, "en")).toEqual("sunday");
			expect(B.weekDayFull(originalDate, "fr")).toEqual("dimanche");
			expect(B.weekDayFull(originalDate, "pt-br")).toEqual("domingo");
		});
	});
});
