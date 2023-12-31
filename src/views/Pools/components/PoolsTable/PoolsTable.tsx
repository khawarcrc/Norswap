import { useRef } from 'react'
import styled from 'styled-components'
import { Button, ChevronUpIcon } from '@nswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { DeserializedPool } from 'state/types'
import PoolRow from './PoolRow'

interface PoolsTableProps {
  pools: DeserializedPool[]
  account: string
}

const StyledTable = styled.div`
  // border-radius: ${({ theme }) => theme.radii.card};
  scroll-margin-top: 64px;
  background-color: #2B2B2B;
  > div:not(:last-child) {
    border: 1px solid #2B2B2B;
  }
`

const StyledTableBorder = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  // border-radius: ${({ theme }) => theme.radii.card};
  // background-color: ${({ theme }) => theme.colors.cardBorder};
  // padding: 1px 1px 3px 1px;
  // background-size: 400% 400%;
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const PoolsTable: React.FC<PoolsTableProps> = ({ pools, account }) => {
  const { t } = useTranslation()
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <StyledTableBorder>
      <StyledTable id="pools-table" role="table" ref={tableWrapperEl}>
        {pools.map((pool) => (
          <PoolRow key={pool.vaultKey ?? pool.sousId} pool={pool} account={account} />
        ))}
        <ScrollButtonContainer>
          <Button variant="text" onClick={scrollToTop}>
            {t('To Top')}
            <ChevronUpIcon color="#009EE2" />
          </Button>
        </ScrollButtonContainer>
      </StyledTable>
    </StyledTableBorder>
  )
}

export default PoolsTable
