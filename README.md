# <p align="center"><a href=""><img width="230" src="./public/pogo.png"></a></p>

<p align="center">Easily calculate and plan out your resources for powering up your pokemons with this tool. <a href="">Try this out now!</a></p>

## Feature
- Calculating the amount of stardust and candies required to power up your pokemon form its current level to your target level
- The costs of regular, shadow, purified, and lucky pokemons are all covered

## Note

Lucky pokemons costs half the stardust when powering up. Shadow pokemons costs 1.2 times more expensive while purified version costs 10% cheaper in both stardust and candies.

Shadow pokemons cannot be traded, hence cannot be lucky at the same time. However, purified pokemons can be traded and become lucky. This is a bit tricky since I couldn't find any source on the costs of powering up in such situation. I also don't have enough resources to experiment it myself. In this current version of `POGO - Power Up`, the reduction from being purified is applied first then cut the cost of stardust in half from being lucky for such situation.

## Costs by Level

This table shows the Stardust, Candy, and XL Candy costs for powering up your Pokemon. Lucky Pokemon cost half the noted Stardust to power up. Each power up adds a half-level. The first column is the pre-power up level of the Pokemon.

| Level | Total Power-Ups | Stardust | Candy | XL Candy | Total Stardust | Total Candy | Total XL Candy |
|-------|-----------------|----------|-------|----------|----------------|-------------|----------------|
| 1     | 1               | 200      | 1     |          | 200            | 1           |                |
| 1.5   | 2               | 200      | 1     |          | 400            | 2           |                |
| 2     | 3               | 200      | 1     |          | 600            | 3           |                |
| 2.5   | 4               | 200      | 1     |          | 800            | 4           |                |
| 3     | 5               | 400      | 1     |          | 1,200          | 5           |                |
| 3.5   | 6               | 400      | 1     |          | 1,600          | 6           |                |
| 4     | 7               | 400      | 1     |          | 2,000          | 7           |                |
| 4.5   | 8               | 400      | 1     |          | 2,400          | 8           |                |
| 5     | 9               | 600      | 1     |          | 3,000          | 9           |                |
| 5.5   | 10              | 600      | 1     |          | 3,600          | 10          |                |
| 6     | 11              | 600      | 1     |          | 4,200          | 11          |                |
| 6.5   | 12              | 600      | 1     |          | 4,800          | 12          |                |
| 7     | 13              | 800      | 1     |          | 5,600          | 13          |                |
| 7.5   | 14              | 800      | 1     |          | 6,400          | 14          |                |
| 8     | 15              | 800      | 1     |          | 7,200          | 15          |                |
| 8.5   | 16              | 800      | 1     |          | 8,000          | 16          |                |
| 9     | 17              | 1,000    | 1     |          | 9,000          | 17          |                |
| 9.5   | 18              | 1,000    | 1     |          | 10,000         | 18          |                |
| 10    | 19              | 1,000    | 1     |          | 11,000         | 19          |                |
| 10.5  | 20              | 1,000    | 1     |          | 12,000         | 20          |                |
| 11    | 21              | 1,300    | 2     |          | 13,300         | 22          |                |
| 11.5  | 22              | 1,300    | 2     |          | 14,600         | 24          |                |
| 12    | 23              | 1,300    | 2     |          | 15,900         | 26          |                |
| 12.5  | 24              | 1,300    | 2     |          | 17,200         | 28          |                |
| 13    | 25              | 1,600    | 2     |          | 18,800         | 30          |                |
| 13.5  | 26              | 1,600    | 2     |          | 20,400         | 32          |                |
| 14    | 27              | 1,600    | 2     |          | 22,000         | 34          |                |
| 14.5  | 28              | 1,600    | 2     |          | 23,600         | 36          |                |
| 15    | 29              | 1,900    | 2     |          | 25,500         | 38          |                |
| 15.5  | 30              | 1,900    | 2     |          | 27,400         | 40          |                |
| 16    | 31              | 1,900    | 2     |          | 29,300         | 42          |                |
| 16.5  | 32              | 1,900    | 2     |          | 31,200         | 44          |                |
| 17    | 33              | 2,200    | 2     |          | 33,400         | 46          |                |
| 17.5  | 34              | 2,200    | 2     |          | 35,600         | 48          |                |
| 18    | 35              | 2,200    | 2     |          | 37,800         | 50          |                |
| 18.5  | 36              | 2,200    | 2     |          | 40,000         | 52          |                |
| 19    | 37              | 2,500    | 2     |          | 42,500         | 54          |                |
| 19.5  | 38              | 2,500    | 2     |          | 45,000         | 56          |                |
| 20    | 39              | 2,500    | 2     |          | 47,500         | 58          |                |
| 20.5  | 40              | 2,500    | 2     |          | 50,000         | 60          |                |
| 21    | 41              | 3,000    | 3     |          | 53,000         | 63          |                |
| 21.5  | 42              | 3,000    | 3     |          | 56,000         | 60          |                |
| 22    | 43              | 3,000    | 3     |          | 59,000         | 69          |                |
| 22.5  | 44              | 3,000    | 3     |          | 62,000         | 72          |                |
| 23    | 45              | 3,500    | 3     |          | 65,500         | 75          |                |
| 23.5  | 46              | 3,500    | 3     |          | 69,000         | 78          |                |
| 24    | 47              | 3,500    | 3     |          | 72,500         | 81          |                |
| 24.5  | 48              | 3,500    | 3     |          | 76,000         | 84          |                |
| 25    | 49              | 4,000    | 3     |          | 80,000         | 87          |                |
| 25.5  | 50              | 4,000    | 3     |          | 84,000         | 90          |                |
| 26    | 51              | 4,000    | 4     |          | 88,000         | 94          |                |
| 26.5  | 52              | 4,000    | 4     |          | 92,000         | 98          |                |
| 27    | 53              | 4,500    | 4     |          | 96,500         | 102         |                |
| 27.5  | 54              | 4,500    | 4     |          | 101,000        | 106         |                |
| 28    | 55              | 4,500    | 4     |          | 105,500        | 110         |                |
| 28.5  | 56              | 4,500    | 4     |          | 110,000        | 114         |                |
| 29    | 57              | 5,000    | 4     |          | 115,000        | 118         |                |
| 29.5  | 58              | 5,000    | 4     |          | 120,000        | 122         |                |
| 30    | 59              | 5,000    | 4     |          | 125,000        | 126         |                |
| 30.5  | 60              | 5,000    | 4     |          | 130,000        | 130         |                |
| 31    | 61              | 6,000    | 6     |          | 136,000        | 136         |                |
| 31.5  | 62              | 6,000    | 6     |          | 142,000        | 142         |                |
| 32    | 63              | 6,000    | 6     |          | 146,000        | 148         |                |
| 32.5  | 64              | 6,000    | 6     |          | 154,000        | 154         |                |
| 33    | 65              | 7,000    | 8     |          | 161,000        | 162         |                |
| 33.5  | 66              | 7,000    | 8     |          | 168,000        | 170         |                |
| 34    | 67              | 7,000    | 8     |          | 175,000        | 178         |                |
| 34.5  | 68              | 7,000    | 8     |          | 182,000        | 186         |                |
| 35    | 69              | 8,000    | 10    |          | 190,000        | 196         |                |
| 35.5  | 70              | 8,000    | 10    |          | 198,000        | 206         |                |
| 36    | 71              | 8,000    | 10    |          | 206,000        | 216         |                |
| 36.5  | 72              | 8,000    | 10    |          | 214,000        | 226         |                |
| 37    | 73              | 9,000    | 12    |          | 223,000        | 238         |                |
| 37.5  | 74              | 9,000    | 12    |          | 232,000        | 250         |                |
| 38    | 75              | 9,000    | 12    |          | 241,000        | 262         |                |
| 38.5  | 76              | 9,000    | 12    |          | 250,000        | 274         |                |
| 39    | 77              | 10,000   | 15    |          | 260,000        | 289         |                |
| 39.5  | 78              | 10,000   | 15    |          | 270,000        | 304         |                |
| 40    | 79              | 10,000   |       | 10       | 280,000        | 304         | 10             |
| 40.5  | 80              | 10,000   |       | 10       | 290,000        | 304         | 20             |
| 41    | 81              | 11,000   |       | 10       | 301,000        | 304         | 30             |
| 41.5  | 82              | 11,000   |       | 10       | 312,000        | 304         | 40             |
| 42    | 83              | 11,000   |       | 12       | 323,000        | 304         | 52             |
| 42.5  | 84              | 11,000   |       | 12       | 334,000        | 304         | 64             |
| 43    | 85              | 12,000   |       | 12       | 346,000        | 304         | 76             |
| 43.5  | 86              | 12,000   |       | 12       | 358,000        | 304         | 88             |
| 44    | 87              | 12,000   |       | 15       | 370,000        | 304         | 103            |
| 44.5  | 88              | 12,000   |       | 15       | 382,000        | 304         | 118            |
| 45    | 89              | 13,000   |       | 15       | 395,000        | 304         | 133            |
| 45.5  | 90              | 13,000   |       | 15       | 408,000        | 304         | 148            |
| 46    | 91              | 13,000   |       | 17       | 421,000        | 304         | 165            |
| 46.5  | 92              | 13,000   |       | 17       | 434,000        | 304         | 182            |
| 47    | 93              | 14,000   |       | 17       | 448,000        | 304         | 199            |
| 47.5  | 94              | 14,000   |       | 17       | 462,000        | 304         | 216            |
| 48    | 95              | 14,000   |       | 20       | 476,000        | 304         | 236            |
| 48.5  | 96              | 14,000   |       | 20       | 490,000        | 304         | 256            |
| 49    | 97              | 15,000   |       | 20       | 505,000        | 304         | 276            |
| 49.5  | 98              | 15,000   |       | 20       | 520,000        | 304         | 296            |

> Special thanks to [GamePress](https://gamepress.gg/pokemongo/power-up-costs) for this chart.

## Built with

- [Vite 5](https://vitejs.dev/) - Build tool
- [React 18](https://react.dev/) - Development environment
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## Contributing

Pull requests are welcome. Please open an issue first to discuss what you'd like to improve or any bug you'd like to fix.