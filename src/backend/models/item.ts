import {Stat, StatType} from "@/backend/models/Stat";

export abstract class Item {

    name: string
    level: number
    primaryStats: Array<Stat>
    secondaryStats: Array<Stat>

    constructor(name: string, level: number, primaryStats: Array<Stat>, secondaryStats: Array<Stat>) {
        this.name = name
        this.level = level
        this.primaryStats = primaryStats
        this.secondaryStats = secondaryStats
    }

    totalOf(type: StatType) {
        return this.primaryTotalOf(type) + this.secondaryTotalOf(type)
    }

    primaryTotalOf(type: StatType) {
        let total = 0
        for (const stat of this.primaryStats) {
            if(stat.type == type) {
                total += stat.value
            }
        }
        return total
    }

    secondaryTotalOf(type: StatType) {
        let total = 0
        for (const stat of this.secondaryStats) {
            if(stat.type == type) {
                total += stat.value
            }
        }
        return total
    }

}