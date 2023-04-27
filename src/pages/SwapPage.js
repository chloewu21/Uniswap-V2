import React, { useEffect } from 'react'
import 'feather-icons'

import TopTokenList from '../components/TokenList'
import { TYPE } from '../Theme'
import Panel from '../components/Panel'
import { useAllTokenData } from '../contexts/TokenData'
import { PageWrapper, FullWrapper } from '../components'
import { RowBetween } from '../components/Row'
import Search from '../components/Search'
import { useMedia } from 'react-use'

function SwapPage() {
    const allTokens = useAllTokenData()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const below600 = useMedia('(max-width: 800px)')

    // const [useTracked, setUseTracked] = useState(true)

    return (
        // <PageWrapper>

        <iframe src="https://chloe-testappv2-wmn5n7rc5q-uc.a.run.app" width="100%" height="820" scrolling="no" frameborder="0"></iframe>


        // </PageWrapper>
    )
}

export default SwapPage