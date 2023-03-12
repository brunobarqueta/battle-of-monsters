import Box from '@mui/material/Box';
import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterStats, BattleMonsterTitle, ProgressBar, Image, Hr } from "./MonsterBattleCard.styled"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
    return (
        <BattleMonsterCard data-testid="monster-card" centralized>
            <Box sx={{ width: '100%' }} alignItems="center" justifyContent="center">
                {monster ? (
                    <>
                        <Image src={monster?.imageUrl} />
                        <BattleMonsterTitle>{title!}</BattleMonsterTitle>
                        <Hr />
                        <BattleMonsterStats>HP</BattleMonsterStats>
                        <ProgressBar variant="determinate" value={monster?.hp} />
                        <BattleMonsterStats>Attack</BattleMonsterStats>
                        <ProgressBar variant="determinate" value={monster?.attack} />
                        <BattleMonsterStats>Defense</BattleMonsterStats>
                        <ProgressBar variant="determinate" value={monster?.defense} />
                        <BattleMonsterStats>Speed</BattleMonsterStats>
                        <ProgressBar variant="determinate" value={monster?.speed} />
                    </>
                ) : <BattleMonsterTitle>{title!}</BattleMonsterTitle>
                }
            </Box>
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }