class Specie < ActiveRecord::Base
    belongs_to :classification
    belongs_to :designation
    belongs_to :language
    belongs_to :planet, foreign_key: 'homeworld_id'
    has_many :characters, foreign_key: 'specie_id'
    validates_uniqueness_of :name
end