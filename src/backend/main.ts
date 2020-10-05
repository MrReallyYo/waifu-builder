import {Character} from "@/backend/models/character";
import {Weapon} from "@/backend/models/weapon";
import {Artifact} from "@/backend/models/artifact";
import {Stat, StatType} from "@/backend/models/Stat";

export class Main {
    run() {
        console.log("Start Main.")




        this.calc(this.chungus())
        this.calc(this.fischl())


    }

    calc(char: Character) {
        const mysteryModifier = 5.9
        const baseAttack = char.baseStatOf(StatType.AttackFlat) + char.weaponStatOf(StatType.AttackFlat)
        const attackFlatBonus = char.artifactsStatOf(StatType.AttackFlat)
        const attackPercentBonus = baseAttack * (mysteryModifier + char.artifactsStatOf(StatType.AttackPercent)) / 100
        const bonusAttack = attackFlatBonus + attackPercentBonus
        const totalAttack = baseAttack + bonusAttack

        const elementalMastery = char.baseStatOf(StatType.ElementalMastery) + char.weaponStatOf(StatType.ElementalMastery) + char.artifactsStatOf(StatType.ElementalMastery)
        const critRate = char.baseStatOf(StatType.CritRate) + char.weaponStatOf(StatType.CritRate) + char.artifactsStatOf(StatType.CritRate)
        const critDmg = char.baseStatOf(StatType.CritDmg) + char.weaponStatOf(StatType.CritDmg) + char.artifactsStatOf(StatType.CritDmg)

        const critMod = (100 + (critDmg * critRate / 100)) / 100
        const effectiveAttack = totalAttack * critMod
        console.log(char.name + "\nAttack: " + totalAttack + " (" + baseAttack + " +" + bonusAttack +")\nElemental Mastery: " + elementalMastery + "\nCrit Rate: " + critRate + "%\nCrit Dmg: " + critDmg + "%")
        console.log("Effective Attack: " + effectiveAttack)
    }




    chungus() {
        const weapon =  new Weapon("Sword",
            50,
            [
                new Stat(StatType.AttackFlat, 193)
            ],
            [
                new Stat(StatType.ElementalMastery, 122)
            ]
        )
        const items = [
            new Artifact(
                "Flower of Life",
                8,
                [
                ],
                [
                    new Stat(StatType.AttackFlat, 14),
                    new Stat(StatType.ElementalMastery, 13)
                ]
            ),
            new Artifact(
                "Plume of Death",
                10,
                [
                    new Stat(StatType.AttackFlat, 161)
                ],
                [
                    new Stat(StatType.AttackPercent, 4.7)
                ]
            ),
            new Artifact(
                "Sands of Eon",
                8,
                [
                    new Stat(StatType.AttackPercent, 17.1)
                ],
                [
                    new Stat(StatType.AttackFlat, 7),
                    new Stat(StatType.ElementalMastery, 14),
                    new Stat(StatType.CritDmg, 3.3)
                ]
            ),
            new Artifact(
                "Goblet of Eonothem",
                8,
                [
                    new Stat(StatType.AttackPercent, 17.1)
                ],
                [
                    new Stat(StatType.ElementalMastery, 13)
                ]
            ),
            new Artifact(
                "Circlet of Logos",
                8,
                [
                    new Stat(StatType.CritRate, 13.7)
                ],
                [
                    new Stat(StatType.ElementalMastery, 15),
                    new Stat(StatType.AttackFlat, 12)
                ]
            ),

            new Artifact(
                "Set Bonus",
                0,
                [
                    new Stat(StatType.CritRate, 12),
                    new Stat(StatType.ElementalMastery, 80)
                ],
                [
                ]
            ),
        ]
        return new Character("chungus",50, [new Stat(StatType.AttackFlat, 118), new Stat(StatType.CritRate, 5), new Stat(StatType.CritDmg, 50)],weapon, items)
    }
    fischl() {
        const weapon =  new Weapon("Bow",
            50,
            [
                new Stat(StatType.AttackFlat, 266)
            ],
            [
                new Stat(StatType.ElementalMastery, 107)
            ]
        )
        const items = [
            new Artifact(
                "Flower of Life",
                8,
                [
                ],
                [
                    new Stat(StatType.AttackPercent, 3.2),
                    new Stat(StatType.AttackFlat, 7)
                ]
            ),
            new Artifact(
                "Plume of Death",
                11,
                [
                    new Stat(StatType.AttackFlat, 173)
                ],
                [
                    new Stat(StatType.AttackPercent, 3.3),
                    new Stat(StatType.ElementalMastery, 17)
                ]
            ),
            new Artifact(
                "Sands of Eon",
                8,
                [
                    new Stat(StatType.AttackPercent, 17.1)
                ],
                [
                    new Stat(StatType.CritDmg, 4.2)
                ]
            ),
            new Artifact(
                "Goblet of Eonothem",
                9,
                [
                    new Stat(StatType.AttackPercent, 18.6)
                ],
                [
                    new Stat(StatType.AttackFlat, 7),
                    new Stat(StatType.ElementalMastery, 10)
                ]
            ),
            new Artifact(
                "Circlet of Logos",
                8,
                [
                    new Stat(StatType.AttackPercent, 12.7)
                ],
                [
                    new Stat(StatType.AttackFlat, 7),
                    new Stat(StatType.ElementalMastery, 14)
                ]
            ),

            new Artifact(
                "Set Bonus",
                0,
                [
                    new Stat(StatType.AttackPercent, 18),
                    new Stat(StatType.ElementalMastery, 80)
                ],
                [
                ]
            ),
        ]
        return new Character("Fisch",50, [new Stat(StatType.AttackFlat, 129), new Stat(StatType.CritRate, 5), new Stat(StatType.CritDmg, 50)],weapon, items)



      /*  const char = new Character("Fischl",50, 129)
        const weapon = new Weapon("Bow",50, 266)
        const flower = new Artifact("flower", 9,0,0,3.2,7)
        const plume = new Artifact("plume", 11,0,173,3.3,0)
        const sands = new Artifact("sands", 8,17.1,0,0,0)
        const goblet = new Artifact("goblet", 9,18.6,0,0,7)
        const circlet = new Artifact("circlet", 5,12.7,0  ,0,7)



        const baseAttack = char.baseAttack + weapon.baseAttack
        const attackFlat = flower.attackFlat() + plume.attackFlat() + sands.attackFlat() + goblet.attackFlat() + circlet.attackFlat()



        const attackPercentTotal = 18 + 5.9 + flower.attackPercent() + plume.attackPercent() + sands.attackPercent() + goblet.attackPercent() + circlet.attackPercent()
        const attackPercentBonus = baseAttack * (attackPercentTotal / 100)
        const totalAttack = baseAttack + attackPercentBonus + attackFlat


        console.log("Base Attack: " + baseAttack)
        console.log("% Total: " + attackPercentTotal)
        console.log("% Bonus: " + attackPercentBonus)
        console.log("Flat Bonus: " + attackFlat)
        console.log("Total Attack: " + totalAttack)*/

    }
}