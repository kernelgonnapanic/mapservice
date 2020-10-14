import React, { useState, useEffect } from 'react'
import { ReactComponent as PlSvg } from '../../assets/countryicons/poland-flag.svg'
import { ReactComponent as UkSvg } from '../../assets/countryicons/united-kingdom-flag.svg'
import i18n from 'assets/translations/i18n'
import { FlagButton } from './LanguageSettings.styles'
import { Tooltip } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const EN = 'en'
const PL = 'pl'

const LanguageSettings = () => {
	const { t } = useTranslation()

	const [activeLanguage, setActiveLanguage] = useState(PL)

	const changeLanguage = () => {
		const language = activeLanguage === EN ? PL : EN

		setActiveLanguage(language)
		i18n.changeLanguage(language)
	}
	//ts-ignore
	const languageConfig: any = {
		pl: <PlSvg width={30} height={30} />,
		en: <UkSvg width={30} height={30} />,
	}

	return (
		<>
			<Tooltip title={t('notActiveLanguage') as string}>
				<FlagButton onClick={changeLanguage}>
					{languageConfig[activeLanguage]}
				</FlagButton>
			</Tooltip>
		</>
	)
}

export default LanguageSettings
