
export enum StatType {
    AttackFlat,
    AttackPercent,
    ElementalMastery,
    CritRate,
    CritDmg
}

export class Stat {
    type: StatType
    value: number

    constructor(type: StatType, value: number) {
        this.type = type
        this.value = value
    }

}