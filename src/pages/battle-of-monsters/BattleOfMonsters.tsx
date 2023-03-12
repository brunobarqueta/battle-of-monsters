import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay"
import { Title } from "../../components/title/Title"
import { fetchMonstersData, battleMonsters } from "../../reducers/monsters/monsters.actions"
import { selectMonsters, selectSelectedMonster, selectSelectedComputerMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const [winnerMonster, setWinnerMonster] = useState<string | null>(null);

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)
    const selectedComputerMonster = useSelector(selectSelectedComputerMonster)

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, []);

    const handleStartBattleClick = async () => {
        if (selectedMonster && selectedComputerMonster) {
            const winner = await dispatch(battleMonsters({ monsterId1: selectedMonster.id,  monsterId2: selectedComputerMonster.id}))
            if (typeof winner.payload === "string") {
                setWinnerMonster(winner.payload);
            }
        }
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />
            {
                winnerMonster && (
                    <WinnerDisplay text={winnerMonster} />
                )
            }
            <BattleSection>
                <MonsterBattleCard title={selectedMonster?.name || "Player"} monster={selectedMonster || null}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button" disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard title={selectedComputerMonster?.name || "Computer"} monster={selectedComputerMonster || null}></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }