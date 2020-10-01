class Character < ActiveRecord::Base
    belongs_to :gender
    belongs_to :specie
    belongs_to :planet, foreign_key: 'homeworld_id'
    validates_uniqueness_of :name
end