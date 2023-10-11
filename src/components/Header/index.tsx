import * as S from 'components/Header/styles'
import Link from 'next/link'

export const Header = () => {
  return (
    <>
      <S.ContainerFluid>
        <S.Nav>
          <S.ContainerCenter>
            <Link href="/">
              <a>
                <S.Logo>
                  <img
                    src="/img/nomelogo1.png"
                    alt="Pizzaria Toffanetto"
                    width="550"
                    height="90"
                  />
                </S.Logo>
              </a>
            </Link>
          </S.ContainerCenter>
        </S.Nav>
      </S.ContainerFluid>
    </>
  )
}
