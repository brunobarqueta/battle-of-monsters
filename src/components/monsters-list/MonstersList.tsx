import { useState, } from "react"
import { useAppDispatch } from "../../app/hooks"
import { Monster } from "../../models/interfaces/monster.interface"
import { setSelectedMonster, setSelectedComputerMonster } from "../../reducers/monsters/monsters.actions"
import { Image, ListTitle, MonsterCard, MonsterName, MonstersSection } from "./MonstersList.styled"

type MonstersListProps = {
    monsters: Monster[]
}

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
    const dispatch = useAppDispatch();

    const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);

    const handleMonsterClick = (monster: Monster) => {
        const value = selectedMonsterId === monster.id ? null : monster.id
        setSelectedMonsterId(value)
        dispatch(setSelectedMonster(!value ? null : monster));
        const computerMonster = randomMonster(monsters, value);
        dispatch(setSelectedComputerMonster(!value ? null : computerMonster));
    }

    const randomMonster = (monsters: Monster[], selectedMonsterId: string | null) => {
        const monstersFiltered = monsters.filter((monster) => monster.id != selectedMonsterId)
        return monstersFiltered[Math.floor(Math.random() * monstersFiltered.length)];
    }

    return (
        <div>
            <ListTitle>{monsters.length > 0 ? 'Select your monster' : 'No monsters available'}</ListTitle>

            <MonstersSection data-testid="monsters-list-section">
                {monsters.length > 0 ? (
                    monsters.map(monster => (
                        <MonsterCard key={monster.id} onClick={() => handleMonsterClick(monster)} selected={monster.id === selectedMonsterId} data-testid={monster.id}>
                            <Image src={monster.imageUrl} />
                            <MonsterName>
                                {monster.name}
                            </MonsterName>
                        </MonsterCard>
                    ))) : null}
            </MonstersSection>
        </div>
    )
}

export { MonstersList }