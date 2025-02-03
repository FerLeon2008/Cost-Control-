import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CostRegistrer' })
export class NewCostProps {
    @PrimaryGeneratedColumn()
    id_spend: number;

    @Column()
    date: string;
  
    @Column()
    price: number;

    @Column()
    type: string;
}
