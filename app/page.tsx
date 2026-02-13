import { Container, TopBar, Title, Filters } from '@/components/shared'
import { ProductsGroupList } from '@/components/shared/products-group-list'

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-16">
          {/* Фильтрация */}
          <div className="w-62.5">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Завтраки"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Пиццы"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
