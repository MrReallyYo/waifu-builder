import {Stat, StatType} from "@/backend/models/Stat";
import {Weapon} from "@/backend/models/weapon";
import {Artifact} from "@/backend/models/artifact";

export class Character {
    name: string
    level: number
    baseStats: Array<Stat>
    weapon: Weapon
    artifacts: Array<Artifact>


    constructor(name: string, level: number, baseStats: Array<Stat>, weapon: Weapon, artifacts: Array<Artifact>) {
        this.name = name
        this.level = level
        this.baseStats = baseStats
        this.weapon = weapon
        this.artifacts = artifacts
    }

    baseStatOf(type: StatType) {
        let total = 0
        for (const stat of this.baseStats) {
            if (stat.type == type) {
                total += stat.value
            }
        }
        return total
    }

    weaponStatOf(type: StatType) {
        return this.weapon.totalOf(type)
    }

    artifactsStatOf(type: StatType) {
        let total = 0
        for (const artifact of this.artifacts) {
            total += artifact.totalOf(type)
        }
        return total
    }
}

